import React, { Component } from 'react';
import './home.css'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
import { CSVLink, CSVDownload } from "react-csv";
import Autosuggest from 'react-autosuggest';






import { MdContacts,MdAllInclusive,MdDashboard,MdViewCarousel,MdWbIridescent } from "react-icons/md";






const username = [
  {
   name: 'animal lover',

  },
  {
   name: 'business',
  },
  {
   name: 'fashion',
  },
  {
   name: 'food',
  },
  {
   name: 'fitness',
  },

  {
   name: 'lifestyle',
  },
  {
   name: 'painting',
  },
  {
   name: 'pets',
  },
  {
   name: 'shopping',
  },
  {
   name: 'travel',
  },

]



const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : username.filter(lang =>
    lang.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};


const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => (

  <div className='c1 shadow'>
    {suggestion.name}
      </div>

);

class Home extends Component {

  state = {
      value: '',
      suggestions: [],
      csv: false,
    };

    onChange = (event, { newValue }) => {
   this.setState({
     value: newValue,
     csv: true
   });
 };

 onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };











  render(){

    const  csvData = [
    [  "_sir.mango",],
    ["  mollyrue_and_lillylou",],
    ["  elenagarcia390",],
    ["  agnieszka_zakrzewska_",],
    ["  jax_introuble",],
    ["  _lifeofspeedy_",],
    ["  vovodicas",],
    ["  iam.niebla",],
    ["  animals.col",],
    ["  ramannarula",],
    ["  andreassfischer",],
    ["  lady_red_dragon",],
    ["  shot_by_somu",],
    ["  naike_belen",],
    ["  iamrobbellamy"],
    ["  melissajayne",],
    ["  lene.m_art",],
    ["  amiyafuriru",],
    ["  theroguemuslim",],
    ["  softservemarketing",],
    ["  ambi.mkd",],
    ["  toryon_thomas",],
    ["  thebogchique",],
    ["  james1fab",],
    ["  punto_del_lusso",],
    ["  primebusinessstrategy",],
    ["  aa.taxlegal",],
    ["  angela.iris_",],
    ["  amia.maro.service",],
    ["  elshen_bakxishoff",],
    ["  glimpse.light",],
    ["  daryls_life_story",],
    ["  mktaprendiz",],
    ["  persian_gemstones",],
    ["  gp_2911"]
    ];







    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: '',
      value,
      onChange: this.onChange
    };

    return <div>

 <div className='a1'>
        <Fade bottom>
 <div className='container-fluid '>

   <span className='v1'>Influ<span className='v2'>Rocket</span></span>
     <Link to='/contact'><button className='btn a2 float-right'>Contact</button></Link>
    <Link to='/blog'><button className='btn a2 float-right'>Blog</button></Link>

  <Link to='/newsletter'><button className='btn a2 float-right'>Newsletter</button></Link>

  <Link to='/tools'><button className='btn a2 float-right'>Tools</button></Link>
  <Link to='/services'><button className='btn a2 float-right'>Services</button></Link>
    <Link to='/'><button className='btn a2 float-right'>Home</button></Link>


 </div>
  </Fade>
 </div>
    <div className='container-fluid text-center jumbotron justify-content-center row '>
            <Bounce left>
   <h1 className='  a4'>Instagram Follow-back Tool</h1>
           </Bounce>

                     <Bounce left>
   <h6 className='text-center a5'>Get Up To 50 Accounts With 80% follow-back potential</h6>


   <div className='container row justify-content-center s8'>
    <Zoom top>
   <div className='s2'>
   <h1 className='s1 s4'>Your IG Account Name</h1>
<input  className='s3' placeholder='Type IG account name'/>
   </div>
    </Zoom>

 <Zoom top>
   <div  className='s2'>
   <h1 className='s1'>Select A Niche(choose from options)</h1>
   <div className='d2'>
         <div className='d1'>
   <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
      </div>
 </div>
   </div>
    </Zoom>

     <Zoom top>
   <div className='s2' >
   <CSVLink data={csvData}><button className='s6 s7'>Download</button></CSVLink>
   </div>
 </Zoom>
   </div>
              </Bounce>
   </div>
          </div>
  }
}
export default Home;
