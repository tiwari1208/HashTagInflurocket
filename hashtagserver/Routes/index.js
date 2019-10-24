module.exports = (app) => {
const data = require('../Data/index.js')


app.get('/:nicheID', (req,res) => {
  const result= req.params.nicheID

  if(result==='Jeans'){
    res.send(data.Jeans)
  }
  if(result==='Leather_Jacket'){
    res.send(data.Leather_Jacket)
  }
  if(result==='Leather_Pants'){
    res.send(data.Leather_Pants)
  }
  if(result==='Leather_Clothing'){
    res.send(data.Leather_Clothing)
  }
  if(result==='Mens_and_Boys_Hats'){
    res.send(data.Mens_and_Boys_Hats)
  }
  if(result==='Neckwear'){
    res.send(data.Neckwear)
  }
  if(result==='Pants'){
    res.send(data.Pants)
  }
  if(result==='Mens_Suits'){
    res.send(data.Mens_Suits)
  }
  if(result==='Shirts'){
    res.send(data.Shirts)
  }
  if(result==='Surplus_and_Salvage_Merchandise'){
    res.send(data.Surplus_and_Salvage_Merchandise)
  }else{
    res.send('No result found')
  }

})

app.get('/', (req,res) => {
 res.send(JSON.stringify(data))
})
}
