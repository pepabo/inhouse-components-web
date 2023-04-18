import { graphql } from '@octokit/graphql'
import fs from 'fs'
import path from 'path'

const data = fs.readFileSync(path.join(__dirname, '../.pull_requests'), 'utf8')
const pullRequestIds = data.split('\n').filter(line => line.length > 0).map(line => parseInt(line, 10))

const req = graphql.defaults({
  baseUrl: 'https://git.pepabo.com/api/v3',
  headers: {
    authorization: `token ${process.env.GHE_TOKEN}`
  }
})

interface Edge {
  node: {
    title: string
    number: number
    url: string
  }
}

interface Response {
  repository: {
    pullRequests: {
      edges: Edge[]
    }
  }
}

req<Response>(`
  {
    repository(owner: "inhouse", name: "components-web") {
      pullRequests(last: 100) {
        edges {
          node {
            number
            title
            url
          }
        }
      }
    }
  }
`)
.then(res => {
  const changeLog = pullRequestIds
    .map(id => {
      return res.repository.pullRequests.edges.find(edge => edge.node.number == id)
    })
    .filter((edge): edge is Edge => !!edge)
    .map(({ node }) => {
      const { title, url } = node
      return `- [#${node.number} ${title}](${url})`
    })
    .join('\n')

  fs.writeFileSync(path.join(__dirname, '../CHANGELOG.md'), changeLog, 'utf8')

  process.exit(0)
})
.catch(err => {
  console.error(err)
  process.exit(1)
})
