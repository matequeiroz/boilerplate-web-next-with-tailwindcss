import Image from 'next/image'

export const Avatar = () => (
  <div>
    <Image
      className="w-full"
      alt="avatar"
      width={300}
      height={300}
      src="https://images.unsplash.com/photo-1486693326701-1ea88c6e2af3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80"
    />
  </div>
)
