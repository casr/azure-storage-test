require('dotenv/config')

const azure = require('azure-storage')
const blobService = azure.createBlobServiceWithSas(
  process.env.AZURE_STORAGE_HOST,
  process.env.AZURE_STORAGE_SHARED_ACCESS_SIGNATURE
)

blobService.createBlockBlobFromLocalFile(
  process.env.AZURE_STORAGE_CONTAINER_NAME,
  'casr-delete-me.jpg',
  'picture.jpg',
  function (err, result, response) {
    if (err) {
      console.error('error')
      console.error(err)
      return
    }

    console.log('result', result)
    console.log('response', response)
  }
)
