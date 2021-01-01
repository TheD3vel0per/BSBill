"""from lexnlp.extract.en.dates import get_dates
from lexnlp.extract.en.entities.nltk_maxent import get_companies
from lexnlp.extract.en.definitions import get_definitions
from lexnlp.extract.en.money import get_money #To Test
from lexnlp.extract.en.durations import get_durations
from lexnlp.extract.en.amounts import get_amount_annotations, get_amounts
from lexnlp.extract.en.addresses.addresses import get_addresses
from lexnlp.nlp.en.segments.pages import get_pages
from bs4 import BeautifulSoup
import requests
"""

# 
# gets the bill class (with URL) to analyze with lexnlp and beautiful soup scraping goes in .
class BillAnalyser: 
    """
    Class to analyze the text of the bill given the url
    Contains methods to extract info and store as string, 
    """

    def __init__(self, url):
        """

        """
        # Use Webscraper here and pass it the URL

        pass