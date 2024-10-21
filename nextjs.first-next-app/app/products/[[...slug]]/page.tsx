import React from 'react';

interface Props {
  params: { slug: string[] }
  searchParams: { sortOrder: string }
}

const ProductPage = ({ params: { slug }, searchParams: { sortOrder } }: Props) => {
  const slugStr = `[${slug.join(", ")}]`;

  return (
    <>
      <div>ProductPage {slugStr} </div>
      <div>Parameter sortOrder: {sortOrder}</div>
    </>
  )
};

export default ProductPage;