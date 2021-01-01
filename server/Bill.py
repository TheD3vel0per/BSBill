

# class definition 
# If you need any reference to the info of the bill please check the following links:
#   - https://towardsdatascience.com/lexnlp-library-for-automated-text-extraction-ner-with-bafd0014a3f8

class Bill:
    
    def __init__(self):

        # Every bill has a name, number, and url
        self.billName = ""      # e.g
        self.billNumber = ""    # e.g HR5014
        self.billURL = "" 

        self.info = {
            "dates": [],        # e.g  ["2020-03-05", "2017-10-01"]
            "money": [],        # e.g ["100", "500", "30000000"]
            "percentages": [],  # e.g ["50%"]
            "ratios": [],       # e.g ["one to two", "5:4"]
            "companies": [],     # e.g ["Company-Name LLC"]
            "courts": [],        # e.g ["Supreme Court of New York"]
            "cusip": [],        # cusip is a 9 digit code that idetntifies all registered US public stocks  e.g []
            "regulations": []   # e.g [('Code of Federal Regulations', '123 CFR 456')]
        }

        """self.billVotes =  {
            "bs": 0,
            "notbs": 0
        }"""





    