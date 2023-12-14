import React,{useState} from 'react'
import useNavigate from "react-router-dom"
import preview from "../assets"
import getRandomPromt from "../utils"
import {Loader, FormFiled} from "../components"

const CreatePost = () => {
  //usenavigate will help us to return home page
  const navigate = useNavigate()
  const [form, setform] = usestate({
    name:" ",
    promt:" ",
    photo:" "
  })
  const[generatingImg, setgeneratingImg] = usestate(false)
  const[loading, setloading] = usestate(false)
  return ( 
    <section className='max-w-7xl mx-auto'>
<div>
    <h1 className='font-extrabold text-black-700 text-4xl'>Create</h1>
    <p className='mt-4 text-1xl  text-gray-500'>Create imaginative and visually stunning 
    images through Dall-E ai and share them withthe comminity</p>
  </div>

  <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
  <div className='flex flex-col gap-5'>

  </div>
  </form>
</section>

    )
}

export default CreatePost