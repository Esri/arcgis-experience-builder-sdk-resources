/** @jsx jsx */
import { React, jsx, css, type AllWidgetProps, DataSourceManager, type FeatureDataRecord, DataSourceStatus, type SerializedStyles } from 'jimu-core'
import type { IMConfig } from '../config'
import { Button, Link, TextInput } from 'jimu-ui'
import { useEffect } from 'react'
import { DEFAULT_CONFIG, SCHEMA } from '../constants'

const { useState } = React

const Widget = (props: AllWidgetProps<IMConfig>) => {
  const [token, setToken] = useState<string>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [errMsg, setErrMsg] = useState<string>(null)

  useEffect(() => {
    if (props.outputDataSources?.[0]) {
      setIsLoading(true)
      // Create the output data source instance.
      DataSourceManager.getInstance().createDataSource(props.outputDataSources[0]).finally(() => {
        setIsLoading(false)
      })
    }
  }, [props.outputDataSources])

  useEffect(() => {
    /**
     * We recommend to get the data source instance whenever you need it, instead saving it in state or other variables.
     * It prevents access to the data source after it has been destroyed.
     */
    const ds = DataSourceManager.getInstance().getDataSource(props.outputDataSources?.[0])

    // If the load process hasn't started or the data source hasn't been created, it will wait.
    if (!isLoading || !ds) {
      return
    }

    // Reset the status.
    ds.setStatus(DataSourceStatus.NotReady)
    ds.setCountStatus(DataSourceStatus.NotReady)

    getAllRepoIssues(token, props.config.defaultOwner, props.config.defaultRepo)
      .then(issues => {
        // Set data to the output data source.
        ds.setSourceRecords(issues.map(d => ds.buildRecord({ attributes: d })))
        ds.setStatus(DataSourceStatus.Unloaded)
        ds.setCountStatus(DataSourceStatus.Unloaded)
        setErrMsg(null)
      })
      .catch((error: Error) => {
        ds.setSourceRecords([])
        ds.setStatus(DataSourceStatus.LoadError)
        ds.setCountStatus(DataSourceStatus.LoadError)
        setErrMsg(error?.message)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [token, props.config.defaultOwner, props.config.defaultRepo, isLoading, props.outputDataSources])

  const getRecords = (dsId: string): FeatureDataRecord[] => {
    return (DataSourceManager.getInstance().getDataSource(dsId)?.getSourceRecords() || []) as FeatureDataRecord[]
  }

  return (
    <div className='widget-demo jimu-widget m-2' css={getStyle()}>
      {
        !props.outputDataSources?.[0]
          ? <h1>Please set the output data source in setting</h1>
          : <div>
            <h1>Output data source without original data sources</h1>

            <Link className='p-0' target='_blank' to='https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens'>Token: </Link>
            <TextInput type='password' className='w-100 pr-2' onAcceptValue={setToken} defaultValue={token} />
            <br />

            <Button onClick={() => { setIsLoading(true) }} disabled={isLoading || !token}>{`Search issues from ${props.config.defaultOwner}/${props.config.defaultRepo}`}</Button>
            <br />

            <h1 className='mt-5'>Results: </h1>
            <div className='query-results'>
              {
                isLoading
                  ? 'Loading ...'
                  : (errMsg || getRecords(props.outputDataSources?.[0]).map((r, i) => <div key={i} className='px-2 py-3'>{`${r.getFieldValue(SCHEMA.fields.number.name)} ${r.getFieldValue(SCHEMA.fields.title.name)}`}</div>))
              }
            </div>
          </div>
      }
    </div>
  )
}

Widget.getFullConfig = (config: IMConfig) => {
  return DEFAULT_CONFIG.merge(config, { deep: true })
}

export default Widget

async function getAllRepoIssues(token: string, owner: string, repo: string): Promise<Issue[]> {
  const GITHUB_API_BASE_URL = 'https://api.github.com'
  const perPage = 100
  let page = 1
  let allIssues: Issue[] = []
  let hasMore = true

  // We search 3 pages at most.
  while (hasMore && page < 4) {
    const url = `${GITHUB_API_BASE_URL}/repos/${owner}/${repo}/issues?state=all&per_page=${perPage}&page=${page}`
    const response = await fetch(url, {
      headers: {
        Authorization: `token ${token}`,
        Accept: 'application/vnd.github.v3+json',
        'User-Agent': 'TypeScript-Fetch-Script'
      }
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(`Error fetching issues: ${response.status} ${response.statusText} - ${JSON.stringify(errorData)}`)
    }

    const issues: Issue[] = await response.json()

    // Filter out Pull Requests, as the GitHub Issue API also returns them.
    const pureIssues = issues.filter(issue => !issue.pull_request)
    allIssues = allIssues.concat(pureIssues)

    if (issues.length < perPage) {
      hasMore = false
    } else {
      page += 1
    }
  }

  return allIssues
}

interface Issue {
  number: number
  title: string
  state: string
  pull_request?: object
}

function getStyle(): SerializedStyles {
  return css`
    .query-results {
      width: 100%;
      height: 120px;
      overflow: scroll;
    }
  `
}
