    var promp=""
    var c1 = document.getElementById("Canvas1")
    var ct1 = c1.getContext("2d")
    
    var img =new Image()
    
    var screenw=window.innerWidth, screenh=window.innerHeight
    var size=Math.floor(.2*screenw)
    
    c1.width=size; c1.height=size
    
    ct1.font='28px Arial'
img.onload = function() {
  c1.width = this.naturalWidth; 
  c1.height = this.naturalHeight;
  ct1.drawImage(this, 0, 0);
};

    
  function octo(){
    ct1.fillStyle='red'
  ct1.fillText("512x512",5,50)
  
apiKey='eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjNkMjMzOTQ5In0.eyJzdWIiOiJkN2YyODU3MC01MzAzLTQ2YjUtOWY5Zi03ZDYyOTdjYWUzYzkiLCJ0eXBlIjoidXNlckFjY2Vzc1Rva2VuIiwidGVuYW50SWQiOiI3ZmNhNjNjZC0yY2E1LTRjOGQtYWIzZC1jYjVkNDk3ZWZjODgiLCJ1c2VySWQiOiJmM2MyYWRiNC01Y2ZmLTRhMjgtOWJlYy02NGMyMzYyMjBhYjgiLCJyb2xlcyI6WyJGRVRDSC1ST0xFUy1CWS1BUEkiXSwicGVybWlzc2lvbnMiOlsiRkVUQ0gtUEVSTUlTU0lPTlMtQlktQVBJIl0sImF1ZCI6IjNkMjMzOTQ5LWEyZmItNGFiMC1iN2VjLTQ2ZjYyNTVjNTEwZSIsImlzcyI6Imh0dHBzOi8vaWRlbnRpdHkub2N0b21sLmFpIiwiaWF0IjoxNjg3MDQ3NTc1fQ.TDZe63vnwJsrHMx-Tn4mM8xhO2uL_k5WiKTKcFfW1tDdDBHPexvwXVCVn7UnL7V2rfX_mszi0jro9fKMTFmQARnl6Z-_-gQWCr8zHzFlR6JWKx2ohPhzmQJmWpK3Pl21eQNl7VTF3K552x4T2i1FzN6nI-TgjFSYTZtZwHGiXyDb-ttoR-EWqH0LHHuF7cUTbWJecxcIRm1_OShsL0bFqXtT54GfHPB0tgwMP_7y3lqVjnSe9w-sHW-4iQJRUk3xTP5qa2p8V-rgRhA01tGQEYFVg7yK7zC35VlL1TZqK1TgEiOjiVkTi1w8Iy1nMe2Tob4saxddwZDFDSf75FPxeA' 

 fetch('https://stable-diffusion-demo-8yn9n69web73.octoai.cloud/predict', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  },
  body: JSON.stringify({
    'prompt': promp,
  // 'num_inference_steps': '30',
    'sheduler': 'DPMSolverMultistep'
  })
})
.then(response => response.json())
.then( data=> {
  raw1=data.image_0
 var base64 = "data:image/png;base64,"+raw1
 img.src = base64
alert('Image generated')
}
      )
.catch(error => alert('err='+error));
}

function start(){
promp=prompt('EnterPrompt')
octo()
}
setTimeout(start,800)
