Azure Storage Test
==================

Test repository to see how Azure Storage might work with Node.js and Azure
Shared Access Signatures.


Getting started
---------------

You must set the environment variables `AZURE_STORAGE_HOST` and
`AZURE_STORAGE_SHARED_ACCESS_SIGNATURE`. For convenience, you can make
a file called `.env` where you can apply these variables like so:

    AZURE_CONTAINER_NAME=my-container
    AZURE_STORAGE_HOST=https://account-name.blob.core.windows.net/
    AZURE_STORAGE_SHARED_ACCESS_SIGNATURE='sv=...'
    UPLOAD_BASE='directory/to/upload/to/'

Then you can install and run the test script:

    npm install
    npm run upload


Credits
-------

Furele Ghomo took the photo, `picture.jpg`, that is located in this
repository. The photo was released into the public domain and is available
over [here][1].

  [1]: https://flic.kr/p/VW6MKA


Licence
-------

Public domain
