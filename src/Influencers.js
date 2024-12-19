import React from "react";
import { Button } from "@mui/material";

const Influencers = () => {
    return (
        <><div className="h-screen flex items-center justify-center bg-blue-500">
            <h1 className="text-white text-3xl font-bold">
                Tailwind CSS is working!
            </h1>
          </div>
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <Button variant="contained" color="primary">
                MUI Button
            </Button>
            </div>
        </>
    )
}

export default Influencers;