import React, { useState } from 'react';
import axios from 'axios';

function NewMealPlan() {
  const [formData, setFormData] = useState({
    mealName: '',
    category: 'vegetarian',
    ingredients: '',
    description: '',
    imageFile: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, imageFile: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { mealName, category, ingredients, description, imageFile } = formData;
    try {
      const formData = new FormData();
      formData.append('mealName', mealName);
      formData.append('category', category);
      formData.append('ingredients', ingredients);
      formData.append('description', description);
      formData.append('imageFile', imageFile);

      await axios.post('/api/meals', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      // Handle successful submission (e.g., show success message, redirect)
    } catch (error) {
      console.error('Error creating meal:', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100" style={{ backgroundImage: "url('https://images.pexels.com/photos/616401/pexels-photo-616401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="max-w-xl w-full bg-white shadow-lg rounded-lg opacity-95">
        <div className="px-8 py-6">
          <h2 className="text-2xl font-semibold mb-4">Create a New Meal</h2>
          <form onSubmit={handleSubmit}>
            <div className="flex justify-start mb-4">
              <div className="mr-8">
                <div className="mb-4">
                  <label htmlFor="mealName" className="block text-gray-700 font-medium mb-2 w-80">Meal Name</label>
                  <input type="text" id="mealName" name="mealName" value={formData.mealName} onChange={handleChange} placeholder="Enter meal name" className="input-text w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 focus:bg-white" />
                </div>
              </div>
              <div>
                <div className="mb-4">
                  <label htmlFor="category" className="block text-gray-700 font-medium mb-2">Category</label>
                  <div className="relative">
                    <select id="category" name="category" value={formData.category} onChange={handleChange} className="select-category appearance-none border border-gray-300 rounded-md px-4 py-2 pr-8 focus:outline-none focus:border-blue-500 bg-white">
                      <option value="vegetarian">Vegetarian</option>
                      <option value="vegan">Vegan</option>
                      <option value="keto">Keto</option>
                      <option value="others">Others</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="ingredients" className="block text-gray-700 font-medium mb-2">Ingredients</label>
              <textarea id="ingredients" name="ingredients" value={formData.ingredients} onChange={handleChange} placeholder="Enter Ingredients" className="textarea h-24 w-full resize-none bg-gray-100 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 focus:bg-white"></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700 font-medium mb-2">Description</label>
              <textarea id="description" name="description" value={formData.description} onChange={handleChange} placeholder="Enter description" className="textarea h-32 w-full resize-none bg-gray-100 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 focus:bg-white"></textarea>
            </div>
            <div className="mb-4 flex items-center">
              <label htmlFor="imageFile" className="file-upload flex items-center mr-4 cursor-pointer">
                <span className="file-icon text-blue-400">&#128248;</span>
                <input type="file" id="imageFile" name="imageFile" onChange={handleFileChange} className="file-input hidden" />
                <span className="ml-2 text-gray-700">Upload Image</span>
              </label>
            </div>
            <button type="submit" className="btn-submit bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full">CREATE</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewMealPlan;
