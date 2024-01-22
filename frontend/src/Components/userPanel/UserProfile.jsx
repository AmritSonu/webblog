function UserProfile() {
  return (
    <div className="bg-white rounded-lg p-6 mb-4 shadow-md">
      <img
        src="https://picsum.photos/200/200?random="
        alt="user"
        className="w-16 h-16 rounded-full mx-auto mb-4 shadow-lg"
      />
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-2">Amritpal Singh</h2>
        <p className="text-gray-600 mb-4">user@534</p>
        <button className="bg-mainColor-400 text-white font-bold py-2 px-4 rounded hover:bg-mainLightcolor-300">
          Edit Profile
        </button>
      </div>
    </div>
  );
}

export { UserProfile };
