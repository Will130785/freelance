import React from "react"
import Layout from "../components/layout"
import Hero from "../components/home/Hero"
import "../css/app.css"

export default function Home() {
  return (
    <div>
      <Layout>
          <Hero />
      </Layout>
    </div>
  )
}
