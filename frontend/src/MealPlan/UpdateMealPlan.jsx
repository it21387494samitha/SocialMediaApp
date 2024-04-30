import React from 'react'

function UpdateMealPlan() {
  return (
    
      <div class="flex justify-center items-center h-screen bg-gray-100  " style={{ backgroundImage: "url('https://images.pexels.com/photos/616401/pexels-photo-616401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div class="max-w-xl w-full bg-white shadow-lg rounded-lg opacity-95">
        <div class="px-8 py-6">
          <h2 class="text-2xl font-semibold mb-4">Update Meal PLan</h2>
          <form>
            <div class="flex justify-start mb-4">
              <div class="mr-8">
                <div class="mb-4">
                  <label
                    for="mealName"
                    class="block text-gray-700 font-medium mb-2 w-80"
                  >
                    Meal Name
                  </label>
                  <input
                    type="text"
                    id="mealName"
                    placeholder="Enter meal name"
                    class="input-text w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 focus:bg-white"
                  />
                </div>
              </div>
              <div>
                <div class="mb-4">
                  <label
                    for="category"
                    class="block text-gray-700 font-medium mb-2"
                  >
                    Category
                  </label>
                  <div class="relative">
                    <select
                      id="category"
                      name="category"
                      class="select-category appearance-none border border-gray-300 rounded-md px-4 py-2 pr-8 focus:outline-none focus:border-blue-500 bg-white"
                    >
                      <option value="vegetarian">Vegetarian</option>
                      <option value="vegan">Vegan</option>
                      <option value="keto">Keto</option>
                      <option value="others">Others</option>
                    </select>
                    <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg
                        class="h-6 w-6 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-4">
              <label
                for="ingredients"
                class="block text-gray-700 font-medium mb-2"
              >
                Ingredients
              </label>
              <textarea
                id="Ingredients"
                placeholder="Enter Ingredients"
                class="textarea h-24 w-full resize-none bg-gray-100 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 focus:bg-white"
              ></textarea>
            </div>
            <div class="mb-4">
              <label
                for="description"
                class="block text-gray-700 font-medium mb-2 "
              >
                Description
              </label>
              <textarea
                id="description"
                placeholder="Enter description"
                class="textarea h-32 w-full resize-none bg-gray-100 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 focus:bg-white"
              ></textarea>
            </div>
            <div class="mb-4 flex items-center">
              <label
                for="imageFile"
                class="file-upload flex items-center mr-4 cursor-pointer"
              >
                <span class="file-icon text-blue-400">&#128248;</span>
                <input
                  type="file"
                  id="imageFile"
                  name="imageFile"
                  class="file-input hidden"
                />
                <span class="ml-2 text-gray-700">Upload Image</span>
              </label>
            </div>
            <button
              class="btn-submit bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full"
              type="submit"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>


    
  )
}

export default UpdateMealPlan
