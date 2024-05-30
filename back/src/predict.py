import sys
import joblib
import pandas as pd
import json

# Charger le modèle
model = joblib.load('random_forest_model.pkl')

# Lire les données d'entrée depuis les arguments
input_data = json.loads(sys.argv[1])
input_df = pd.DataFrame(input_data)

# Faire une prédiction
predictions = model.predict(input_df)

# Retourner les prédictions
print(json.dumps(predictions.tolist()))
