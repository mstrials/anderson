import React from 'react'
import MembershipPlansCarousel from '../components/MembershipPlansCarousel'
import ContactFormSection from '../components/ContactFormSection'
import { products } from '../data/products'

const PlansPage = () => {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        {/* <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Membership Plans
        </h1> */}
        <MembershipPlansCarousel products={products} />
      </div>
    </div>
  )
}

export default PlansPage
