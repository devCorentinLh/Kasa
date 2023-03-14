
useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('../public/data.json');
        const jsonData = await response.json();
        console.log(jsonData)
        const currentAccomodation = jsonData.find((data) => data.id === idAccomodation);
        if (!currentAccomodation) {
          navigate('/NotFound');
        } else {
          setData(currentAccomodation);
          setImageSlider(currentAccomodation.pictures);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [idAccomodation, navigate]);