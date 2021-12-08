import React from "react"
import { Text,View } from "react-native"
import CheckBox from '@react-native-community/checkbox';
import {issueStyle} from '../style/issueStyle'

interface props{
    propertyText : string,
    setReview : React.Dispatch<React.SetStateAction<boolean>>,
    reviewBy : boolean
}

const IssueCheckBoxItam: React.FC<props> = ({propertyText,setReview,reviewBy}) => {
    return(
        <View>
            <Text style={issueStyle.checkboxText}>{propertyText}</Text>
            <View style={issueStyle.checkboxContainer}>
            <CheckBox
                disabled={false}
                value={reviewBy}
                onValueChange={(newValue) => setReview(newValue)}
            />
            </View>
        </View>
    )
}

export default IssueCheckBoxItam