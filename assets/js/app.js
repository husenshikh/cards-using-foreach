
const cl=console.log;

let flowerarry = [{	name : "Rose",
					content : "Rose is a Late Latin name that comes from the word rosa, which means rose. If Rose is a bit bland for you, you can use an alternate form of the name.",
					bgimage : "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRoZC_JQAsW5rB_YteF6L0u0o94iMUKzkHxa8ibXSoB79pY8mNVv5BnbKehy7mZTEBS"
				},
				
				{
					name : "Lily",
					content : "Flower Names: Any idea what a 'sword lily' or the 'flame of the forest' is? Check out the article to find what they are and also learn as many flower names"
		
				},
				
				{
					name : "Daffodil",
					content : "Daffodil, Daffodils are bright yellow flowers that grow in bunches in open spaces. Lavender, Lavenders are scented upright purple flower spikes that are grown"
				},
				
				{
					name : "Daisy",
					content : "Daisy, fresh, wholesome, and energetic, is one of the flower names that burst back into bloom after a century's hibernation. Originally a nickname for Margaret"
				},
				
				{
					name : "Jasmine",
					content : "Jasmine - Jasmine is one of the prettiest flower names for girls and means 'fragrant flower.' Magnolia. Magnolia – Magnolia is a girl's name of French origin"
				},
				
				{
					name : "Dahlia",
					content : "Dahlia is a cute flower name, bringing to mind small, lovely flowers. This vintage name, pronounced as Da-lee-Ah, also conjures to mind a glamorous silver"
				},
				
				{
					name : "Iris",
					content : "Iris was the Greek goddess of the rainbow, who rode the rainbow as a bridge from heaven to earth. She was referred to as a symbol of power and majesty"
				},
				
				{
					name : "Tulip",
					content : "You see this one originates from Turkey. The popularity for tulip flowers really hit the big time thanks to a Sultan in the 13th century who demanded the blooms"
				},
				
				{
					name : "Portulaca",
					content : "This Portulaca has narrow leaves and the petals are not clearly defined. Because the leaves look like Monocots(not branching)have assumed that."
				}];




let flowercard = ``;

flowerarry.forEach(function(flow){
	cl(flow)
	flowercard +=`
					<div class="col-md-4">
						<div class="card mb-3">
							<div class="card-header alert-primary">
								<h2 class="m-0">${flow.name}</h2>
							</div>
							<div class="card-body alert-danger">
								<p class="m-0">${flow.content}</p>
							</div>
							<div class="card-footer alert-success">
								<button class="btn btn-info">Edit</button>
								<button class="btn btn-danger">Delet</button>
							</div>
						</div>
					</div>
			`
})

const flowercon = document.getElementById("flowercon");
flowercon.innerHTML = flowercard;
















