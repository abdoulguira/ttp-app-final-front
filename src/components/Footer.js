import React from "react"

export default function Footer(){
    return(
        <footer style={styles.footerStyle}>
            <p>Author: Yankang Xue, Jason A. Charles, Ada Maldonado, Pengdwende Guira</p>
      </footer>
    )
}

const styles = {
    footerStyle: {
        marginTop: "100px",
        fontStyle: "italic",
        left: "0px",
        bottom: "0px",
        width: "100%",
        backgroundColor: "black",
        color: "white",
        textAlign: "center"
    }
}