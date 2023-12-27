import React from 'react'
import Head from 'next/head'

type Props = {
  title: string
  description?: string
  ogData?: any
  canonical?: string
}

const getOGraphTags = (data, canonical) =>
  Object.keys(data).map(tagName => {
    if (tagName === 'url' && canonical) {
      return <meta key={`og:${tagName}`} property={`og:${tagName}`} content={`${canonical}`} />
    } else if (tagName === 'modified_time') {
      return (
        <meta key={`article:${tagName}`} property={`article:${tagName}`} content={data[tagName]} />
      )
    }

    return <meta key={`og:${tagName}`} property={`og:${tagName}`} content={data[tagName]} />
  })

const Title = ({ title, description, ogData, canonical }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} key="description" />
      {canonical && <link rel="canonical" href={`${canonical}`} />}
      {ogData && getOGraphTags(ogData, canonical)}
      <meta
        name="ahrefs-site-verification"
        content="cfc5f6bbde9b833b1ef61467a3c4062b926104c090fab5f8368aabd19fb24afc"
      />
    </Head>
  )
}

export default Title
