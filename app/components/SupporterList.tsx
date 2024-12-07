import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import AddSupporterForm from './AddSupporterForm'

export default async function SupporterList() {
  const supabase = createServerComponentClient({ 
    cookies,
  })
  
  const { data: supporters, error } = await supabase
    .from('supporters')
    .select('name')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching supporters:', error)
    return <div>Error loading supporters. Please try again later.</div>
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Believers</h2>
      <AddSupporterForm />
      <ul className="space-y-2 mt-4">
        {supporters.map((supporter, index) => (
          <li key={index}>{supporter.name}</li>
        ))}
      </ul>
    </div>
  )
}
