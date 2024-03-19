# Share code between widgets

These two sample widgets demonstrate how to share code between widgets.

There are two ways to share code between widgets:
* *Dynamic loading*(see the `share-code-chunk`): This method is straightforward to implement. However, it requires dynamic loading of the shared code. In addition, the shared code is compiled into the 'chunks' folder, which contains numerous files and can be challenging to maintain.
* *Shared entry*(see `share-code-entry`): This approach allows you to import shared code using standard ES6 imports, offering a cleaner structure. However, it requires an additional setup step.
