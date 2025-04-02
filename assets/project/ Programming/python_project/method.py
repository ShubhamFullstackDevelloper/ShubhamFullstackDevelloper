from datetime import datetime
day=datetime.today().weekday()
if day ==5 or day==6:
    print("Todays is saturday or sunday")
else:
    print("today is week day")

    