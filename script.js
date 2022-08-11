    const timeContainer = document.getElementById("time-container");
    const START_DAY = "09-14-2021";
    const START_DATE = new Date(START_DAY);
    const intlNumberFormatter = new Intl.NumberFormat("en-US");

    setInterval(() => {
      const now = new Date();
      const difference = Math.floor(
        (now.getTime() - START_DATE.getTime()) / 1000
      );

      timeContainer.innerText = intlNumberFormatter.format(difference);
    }, 1000);
 