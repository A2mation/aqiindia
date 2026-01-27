'use client'

import { use } from 'react'

const SingleBlogPage = ({
  params,
}: {
  params: Promise<{ blogId: string }>
}) => {
  const { blogId } = use(params)
  console.log(blogId)
  return (
    <div className='flex items-center justify-center text-7xl text-red-400 h-screen'>
      Available Soon {blogId}
    </div>
  )
}

export default SingleBlogPage
