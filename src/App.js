import './App.css';
import Nav from './Nav';
import background from './assets/img/def.jpg'
import avatar from './assets/img/default-avatar.png'

import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux'
import {add, decrease, fromBackend, fetchLeads} from './profileSlice'

function App() {  
  const [ShowPhotoEditForm, setShowPhotoEditForm] = useState('none')   
  const [ShowProfileEditForm, setShowProfileEditForm] = useState('none')   
  const [ShowExperienceAddForm, setShowExperienceAddForm] = useState('none')
  const [ShowExperienceEditForm, setShowExperienceEditForm] = useState('none')
  return (
    <div className="App">
      <Nav></Nav>
      <div className='profileCnt mt2 rounded  mx-auto relative p2'>
        <div className='relative masthead'>
          <img src={background} className="rounded" width="100%" />          
          <div className='center absolute left-0 right-0 photoCnt'>
            <img src={avatar} className="circle border5f" width="auto" height="100%" />
            <button className='editPhotoIcon noBtn' onClick={() => {
              setShowPhotoEditForm('block')
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="mercado-match" width="16" height="16" focusable="false">
                <path d="M14.13 1.86a3 3 0 00-4.17 0l-7 7L1 15l6.19-2 6.94-7a3 3 0 000-4.16zm-8.36 9.71l-1.35-1.34L9.64 5 11 6.35z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className='flex justify-between flex-wrap mt4'>
          <div className="relative">
            <h1 className="h1 mb0">heri wahyudianto 
              <span className="super ml1">
                (He/Him)
              </span>
            </h1>
            <div className="">
              Software Engineer
            </div>
            <div className="mt1">
              <span className="text-body-small inline t-black--light break-words">
                Malang, East Java, Indonesia
              </span>
            </div>
            <button className='editNameIcon noBtn' onClick={() => {
                setShowProfileEditForm('block')
              }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="mercado-match" width="16" height="16" focusable="false">
                <path d="M14.13 1.86a3 3 0 00-4.17 0l-7 7L1 15l6.19-2 6.94-7a3 3 0 000-4.16zm-8.36 9.71l-1.35-1.34L9.64 5 11 6.35z"></path>
              </svg>
            </button>
          </div>
          <div className="currentCompanyCnt">
            <div className="">              
              <img src="https://media-exp1.licdn.com/dms/image/C510BAQG1KIuSkHBygg/company-logo_100_100/0/1541416429155?e=1671667200&amp;v=beta&amp;t=uppDL_Yly1kPPGVrD-Z_zejxs256ZVQ2-nOAFH5H8y8" alt="" 
                className="align-middle" width="75" height="75" />
              <span className="bold">
                Onyx Island Pte. Ltd.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='profileCnt mt2 p2 rounded  mx-auto relative mb3'>
        <div className='flex flex-wrap justify-between items-center'>
          <div>
            <h2 className="mt0">Experiences</h2>
          </div>
          <button className='noBtn' onClick={() => {
              setShowExperienceAddForm('block')
            }}>
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
              <path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z"></path>
            </svg>
          </button>
        </div>
        <div className="flex ">
          <div className='pr1'>
            <a className="" target="_self" href="https://www.linkedin.com/company/2137311/">
              <div className="">
                <div className="">
                  <img width="48" 
                  src="https://media-exp1.licdn.com/dms/image/C510BAQG1KIuSkHBygg/company-logo_100_100/0/1541416429155?e=1671667200&amp;v=beta&amp;t=uppDL_Yly1kPPGVrD-Z_zejxs256ZVQ2-nOAFH5H8y8" loading="lazy" height="48" alt="Onyx Island Pte. Ltd. logo"
                  className="" />
                </div>
              </div>
            </a>
          </div>
          <div className="pl1 relative flex-auto">
              <div className="">    
                <div className="bold">
                  Frontend Developer
                </div>
                <div className="companyName mt1">
                  Onyx Island Pte. Ltd. · Contract
                </div>
                <div className="">
                  Oct 2020 - Present · 2 yrs
                </div>
                <div className="">
                  Singapore
                </div>
              </div>          
              <div className="jobDesc mt2">
                <span >1. Convert Figma, Sketch, PSD to web apps
                  <br/>2. Give suggestion to UI/UX designer
                  <br/>3. Collaboration with backend API developer
                  <br/>4. Estimated project turnaround time
                  <br/>5. Build frontend on hubspot , wordpress, salesforce, squarespace, etc
                </span>
              </div>
              <button className='editExperience noBtn' onClick={() => {
                setShowExperienceEditForm('block')
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="mercado-match" width="16" height="16" focusable="false">
                  <path d="M14.13 1.86a3 3 0 00-4.17 0l-7 7L1 15l6.19-2 6.94-7a3 3 0 000-4.16zm-8.36 9.71l-1.35-1.34L9.64 5 11 6.35z"></path>
                </svg>
              </button>
          </div>
        </div>
      </div>
      <div className="overlay relative" style={{display: ShowPhotoEditForm}}>
        <div className='formCnt relative rounded p2'>
          <div className='flex justify-between items-center'>
            <div className='flex-auto'>
              <h2 className="my0">Edit photo</h2>
            </div>  
            <button className='noBtn' onClick={() => {
              setShowPhotoEditForm(false)
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                <path d="M13.42 12L20 18.58 18.58 20 12 13.42 5.42 20 4 18.58 10.58 12 4 5.42 5.42 4 12 10.58 18.58 4 20 5.42z"></path>
              </svg>
            </button>
          </div>
          <label className='label mb1'>Photo URL</label>
          <input type="url" name="homepage" required className='inputTxt p1 rounded mb2'/>
          <div className='right-align'>
            <button className="saveBtn" onClick={() => {
              setShowPhotoEditForm(false)
            }} >
              Save
            </button>
          </div>
        </div>
      </div>
      <div className="overlay relative" style={{display: ShowProfileEditForm}}>
        <div className='formCnt relative rounded p2'>
          <div className='flex justify-between items-center'>
            <div className='flex-auto'>
              <h2 className="my0">Edit profile</h2>
            </div>  
            <button className='noBtn' onClick={() => {
              setShowProfileEditForm(false)
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                <path d="M13.42 12L20 18.58 18.58 20 12 13.42 5.42 20 4 18.58 10.58 12 4 5.42 5.42 4 12 10.58 18.58 4 20 5.42z"></path>
              </svg>
            </button>
          </div>
          <label className='label mb1'>Name</label>
          <input type="text" name="name" required className='inputTxt p1 rounded mb2'/>
          <label className='label mb1'>Gender</label>
          <input type="radio" name="gender" checked="checked:"  className=''/> Man
          <input type="radio" name="gender"  className='ml3'/> Woman
          <label className='label mb1 mt2'>Birthdate</label>
          <input type="date" name="birthdate" required className='inputTxt p1 rounded mb2'/>
          <label className='label mb1'>Job Title</label>
          <input type="text" name="job" required className='inputTxt p1 rounded mb2'/>
          <label className='label mb1 '>Address</label>
          <textarea rows="3" className='textArea mb2'>

          </textarea>
          <div className='right-align'>
            <button className="saveBtn" onClick={() => {
              setShowProfileEditForm(false)
            }} >
              Save
            </button>
          </div>
        </div>
      </div>
      <div className="overlay relative" style={{display: ShowExperienceAddForm}}>
        <div className='formCnt relative rounded p2'>
          <div className='flex justify-between items-center'>
            <div className='flex-auto'>
              <h2 className="my0">Add experience</h2>
            </div>  
            <button className='noBtn' onClick={() => {
              setShowExperienceAddForm(false)
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                <path d="M13.42 12L20 18.58 18.58 20 12 13.42 5.42 20 4 18.58 10.58 12 4 5.42 5.42 4 12 10.58 18.58 4 20 5.42z"></path>
              </svg>
            </button>
          </div>
          <label className='label mb1'>Company</label>
          <input type="text" name="company" required className='inputTxt p1 rounded mb2'/>
          <label className='label mb1'>Company Logo URL</label>
          <input type="url" name="companylogo" required className='inputTxt p1 rounded mb2'/>
          <label className='label mb1'>Position</label>
          <input type="text" name="position" required className='inputTxt p1 rounded mb2'/>
          <label className='label mb1 mt2'>Start Date </label>
          <input type="date" name="startdate" required className='inputTxt p1 rounded mb2'/>
          <label className='label mb1 mt2'>End Date </label>
          <input type="date" name="enddate" required className='inputTxt p1 rounded mb2'/>
          <label className='label mb1'>Job Description</label>
          <textarea rows="3" className='textArea mb2' name='jobDesc'>

          </textarea>
          <div className='right-align'>
            <button className="saveBtn" onClick={() => {
              setShowExperienceAddForm(false)
            }} >
              Save
            </button>
          </div>
        </div>
      </div>      
      <div className="overlay relative" style={{display: ShowExperienceEditForm}}>
        <div className='formCnt relative rounded p2'>
          <div className='flex justify-between items-center'>
            <div className='flex-auto'>
              <h2 className="my0">Edit experience</h2>
            </div>  
            <button className='noBtn' onClick={() => {
              setShowExperienceEditForm(false)
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                <path d="M13.42 12L20 18.58 18.58 20 12 13.42 5.42 20 4 18.58 10.58 12 4 5.42 5.42 4 12 10.58 18.58 4 20 5.42z"></path>
              </svg>
            </button>
          </div>
          <label className='label mb1'>Company</label>
          <input type="text" name="company" required className='inputTxt p1 rounded mb2'/>
          <label className='label mb1'>Company Logo URL</label>
          <input type="url" name="companylogo" required className='inputTxt p1 rounded mb2'/>
          <label className='label mb1'>Position</label>
          <input type="text" name="position" required className='inputTxt p1 rounded mb2'/>
          <label className='label mb1 mt2'>Start Date </label>
          <input type="date" name="startdate" required className='inputTxt p1 rounded mb2'/>
          <label className='label mb1 mt2'>End Date </label>
          <input type="date" name="enddate" required className='inputTxt p1 rounded mb2'/>
          <label className='label mb1'>Job Description</label>
          <textarea rows="3" className='textArea mb2' name='jobDesc'>

          </textarea>
          <div className='right-align'>
            <button className="saveBtn" onClick={() => {
              setShowExperienceEditForm(false)
            }} >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
