import * as fs from 'fs'

import { OpenApiGeneratorV3 } from '@asteasolutions/zod-to-openapi'

import { openApiRegistry } from './openApiRegistry'

const DEFAULT_FILE_NAME = 'swagger.json'

function getOpenApiDocumentation() {
  const generator = new OpenApiGeneratorV3(openApiRegistry.definitions)

  return generator.generateDocument({
    openapi: '3.0.1',
    info: {
      version: '1.0.0',
      title: 'Autobox API',
      description:
        'API to interact with Autobox, a platform for running AI agents based simulations.',
      contact: {
        name: 'Autobox Team',
        email: 'support@autobox.io',
      },
    },
    servers: [
      {
        url: 'https://autobox.ai',
        description: 'Sandbox',
      },
    ],
  })
}

function writeDocumentation(fileName: string) {
  const docs = getOpenApiDocumentation()

  const fileContent = JSON.stringify(docs, null, 2)

  fs.writeFileSync(`${__dirname}/../../${fileName}`, fileContent, {
    encoding: 'utf-8',
  })
}

const [, , fileName] = process.argv

writeDocumentation(fileName || DEFAULT_FILE_NAME)
