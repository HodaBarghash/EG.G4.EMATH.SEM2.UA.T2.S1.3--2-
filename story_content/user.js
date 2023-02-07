function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5bZA1N5BUhE":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbxnwHEz3Rm2VlQBE8XupX6nxrGHvCEm2dbHRepcFHCp-KtaZfb2TuApguclu-MBnh_Z/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

