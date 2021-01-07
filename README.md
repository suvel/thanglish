# Thanglish
	REQUIRMENT:
		To get a tamil word spelled in english with correct pronunciation.

	UI REQUIRMENT:
		SAP which should have a "Search Bar",and Intractable "Small Pills" with the suggestion .
        The "Search Bar" is normal search ,which servers the basic function of the right word and 
        the  "Small Pills" need to copy the text/suggest word on it to the clipbors.

    Data Storage Modeling:
        1st table "actual_wrd" having two column. first "wrd" which is unique string and second will be the "actual_wrd_id" 
        which is unique int.
        2nd table "suvel_wrd" having two column. first "wrd" which is unique string and second will be the "actual_wrd_id" 
        which is int.

    Data Packaging Modeling:
        result = {
            searchString: <any String>,
            matchedWordsArray: <array of String>,
            state: <string requested|Processing|responded>,
            error: <string actual error>,
            errorLog: <any string>,
        }

    React Estimation:
        App
            Thanglish
                SearchBar
                Suggestion
                    Pill

