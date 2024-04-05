import { useNavigate } from 'react-router-dom'
import Form from '@/components/Form'
import Button from '@/components/Button/Button';
import { useAuthContext } from '@/context/AuthContext';
import { ACCEUIL_PATH } from '@/routes/navigation/navigationPaths';

export const LoginPage = () => {
  const { login } = useAuthContext()
  const navigate = useNavigate()
  // const mockedFn = () => {
  //   console.log("mocked");

  // }
  const onSubmitFn = (data: unknown) => {
    console.log({ data });
    login(data)
    console.log("login page")
    navigate(ACCEUIL_PATH)
  }
  return (
    <div className='h-dvh flex justify-center items-center'>
      <div className='max-w-[600px] flex-1'>
        <Form defaultValues={null} onSubmit={onSubmitFn}>
          <Form.Input label='Email' placeholder='unistaf.school@gmail.com' name='email' htmlFor='email' />
          <Form.Input label='Mot de passe' type='password' placeholder='************' name='password' htmlFor='password' />
          <div className='mt-4'>
            <Button title='Connexion' variant='primary' type='submit' />
          </div>
        </Form>
      </div>
    </div>
  )
}
