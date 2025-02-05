import { Button } from '@/components/ui/button'
import { DialogClose } from '@/components/ui/dialog'
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage
} from '@/components/ui/form'
import {
    Input
} from '@/components/ui/input'
import { login } from '@/State/Auth/Action'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const SigninForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const form = useForm({
        resolver: "",
        defaultValues: {
            fullName: "",
            email: "",
            password: "",
        }
    })
    const onSubmit = (data) => { //navigate
        dispatch(login(data, navigate))
        console.log(data)
    }
    return (
        <div >
            <h1 className='text-xl font-bold text-center pb-3'>Login</h1>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='space-y-6'
                >


                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem
                            >
                                <FormControl>
                                    <Input
                                        className="border w-full border-gray-700 p-5"
                                        placeholder="vitrzh@gamil.com"
                                        {...field}

                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />



                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem
                            >
                                <FormControl>
                                    <Input
                                        // name="ifsc"
                                        className="border w-full border-gray-700 p-5"
                                        placeholder="your password"
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
