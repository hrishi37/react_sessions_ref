
export const HomeComponent = () => {
  return (
    <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Modern Navbar & Footer
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Sleek, responsive components built with React and Tailwind CSS
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg mb-4"></div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Feature {i}</h3>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Add some vertical space to see the sticky navbar effect */}
        <div className="h-96 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
          <p className="text-gray-600 text-lg">Scroll to test the sticky navbar effect</p>
        </div>
      </main>
  )
}