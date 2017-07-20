require('dotenv/config')
const fs = require('fs')
const path = require('path')

const azure = require('azure-storage')
const blobService = azure.createBlobServiceWithSas(
  process.env.AZURE_STORAGE_HOST,
  process.env.AZURE_STORAGE_SHARED_ACCESS_SIGNATURE
)

const directory = path.join(__dirname, './to-upload')

fs.readdir(directory, (err, files) => {
  if (err) {
    console.log(err)
    return
  }

  files.forEach(file => {
    blobService.createBlockBlobFromLocalFile(
      process.env.AZURE_STORAGE_CONTAINER_NAME,
      process.env.UPLOAD_BASE + file,
      path.join(directory, file),
      function (err, result, response) {
        if (err) {
          console.error('error', err)
          return
        }

        console.log('Uploaded ' + file)
      }
    )
  })
})
