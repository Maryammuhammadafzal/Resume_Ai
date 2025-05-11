import React from 'react'

const CoverLetterPage = async ({ params }) => {
     const id = await params.id;
  return (
    <div>
      Coverletter {id}
    </div>
  )
}

export default CoverLetterPage
