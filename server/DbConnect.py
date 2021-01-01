from os import environ
from pymongo import MongoClient
from server.App import app
from server.App import db
from flask import jsonify

class DbConnect:

    client = None
    db = None

    def __init__(self):
        self.client = firebase_admin.firestore.client(app=None)
        self.db = self.client['development']
        return

    def add_bill(self, bill):
        """Adds the given bill to the database"""
        db.collection(u'bill').document(u'one').set(bill)
