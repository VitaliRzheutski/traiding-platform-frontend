
import { Button } from '@/components/ui/button'
import {
    Form,
    FormField,
    FormItem,
    FormControl,
    FormMessage
} from '@/components/ui/form'
import {
    Input
} from '@/components/ui/input'
import { useForm } from 'react-hook-form'

export const ForgotPasswordForm = () => {

    const form = useForm({
        resolver: "",
        defaultValues: {
            fullName: "",
            email: "",
        }
    })
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div >
            <h1 className='text-xl font-bold text-center pb-3'>Forgot password</h1>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='space-y-6'
                >


                    <FormField
                        control={form.control}
                        name="Email"
                        render={({ field }) => (
                            <FormItem
                            >
                                <FormControl>
                                    <Input
                                        className="border w-full border-gray-700 p-5"
                                        placeholder="Enter your email"
                                        {...field}

                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />



                    <Button type="submit" className="w-full py-5">
                        Submit
                    </Button>

                </form>
            </Form>
        </div>
    )
}
