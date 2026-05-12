import pandas as pd
from sklearn.ensemble import RandomForestClassifier

class OpportunityScorer:

    def train_model(self, data):
        X = data[["deal_value"]]
        y = data["status"]

        model = RandomForestClassifier()
        model.fit(X, y)

        return model