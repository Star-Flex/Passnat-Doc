import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Layout from "@theme/Layout"
import { memo } from "react"
import type { FC, ReactNode } from "react"

interface Itype {
  children?: ReactNode
}

const AiPage: FC<Itype> = memo((props) => {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout title={`${siteConfig.title}`}>
      <iframe
        src="https://maxkb.passnat.com/ui/chat/e6f6fef1b5aa18a4"
        style={{ height: "calc(100vh - 100px)" }}
        allow="microphone"
      ></iframe>
    </Layout>
  )
})

export default AiPage
