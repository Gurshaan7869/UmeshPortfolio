

function Animation(){
    const styles = {
        loadingContainer: {
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: '#fff',
          zIndex: 9999,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        iframe:{
            border: 'none'
        }
      };

    return(
    <div style={styles.loadingContainer}>
        <iframe style={styles.iframe} src="https://lottie.host/embed/54349b92-eed4-4c57-82bb-e8074c2ce6b7/ecSYNKHIYP.json"></iframe>
    </div>)
}

export default Animation