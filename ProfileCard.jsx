function ProfileCard({ name, role, bio, image, skills }) {
  return (
    <div className="max-w-md bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img 
            className="h-48 w-full object-cover md:h-full md:w-48" 
            src={image}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {role}
          </div>
          <h2 className="mt-1 text-xl font-medium text-gray-900">
            {name}
          </h2>
          <p className="mt-2 text-gray-500">
            {bio}
          </p>
          <div className="mt-4">
            <h3 className="text-sm font-medium text-gray-900">Skills</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProfileCard