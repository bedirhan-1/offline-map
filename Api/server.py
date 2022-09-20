import uvicorn
from fastapi import FastAPI
from fastapi.responses import FileResponse


app = FastAPI()

Link = "http://127.0.0.1:5000/data/1663398860418/0/0/0.png"

@app.get("/data/1663398860418/{z}/{x}/{y}.png")
async def get_tile(z: int, x: int, y: int):
    try :
        return FileResponse(f"tiles/{z}/{x}/{y}.png")
        
    except Exception as e:
        return e


if __name__ == "__main__":
    uvicorn.run("server:app", host="127.0.0.1", port=5000, log_level="info")
