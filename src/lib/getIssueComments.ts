export type Comment = {
  login: string
  avatarUrl: string
}

export default async function getIssueComments(): Promise<Comment[]> {
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: ` barer ${process.env.GITHUB_TOKEN}`,
    },
    body: JSON.stringify({
      query: `query {
        repository(owner:"chibicode", name:"jp") {
          issue(number:3) {
            comments(last: 100) {
              nodes {
                author {
                  login
                  avatarUrl
                }
              }
            }
          }
        }
      }`,
    }),
  })

  const json = await res.json()
  if (res.status !== 200) {
    console.error(json)
    throw new Error('Failed to fetch API')
  }

  return [
    ...new Set(
      (json.data.repository.issue.comments.nodes as {
        author: Comment
      }[]).map((node) => `${node.author.login}|${node.author.avatarUrl}`)
    ),
  ]
    .reverse()
    .map((str) => {
      const [login, avatarUrl] = str.split('|')
      return { login, avatarUrl }
    })
}
