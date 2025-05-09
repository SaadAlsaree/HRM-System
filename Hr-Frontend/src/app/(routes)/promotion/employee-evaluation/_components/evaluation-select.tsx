import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function EvaluationSelect ( { placeholder, onValueChange, defaultValue}: { placeholder: string, onValueChange: ()=>void, defaultValue: string | undefined}){
return(
    <Select onValueChange = {onValueChange} defaultValue={defaultValue}>
         <SelectTrigger>
            <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value='1'>ضعيف</SelectItem>
            <SelectItem value='2'>متوسط</SelectItem>
            <SelectItem value='3'>جيد</SelectItem>
            <SelectItem value='4'>جيد جداَ</SelectItem>
            <SelectItem value='5'>ممتاز</SelectItem> 
        </SelectContent>
    </Select>
)
}