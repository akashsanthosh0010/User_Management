from django.db import models
from django.contrib.auth.models import AbstractBaseUser,BaseUserManager


class MyAccountManager(BaseUserManager):
    def create_user(self,first_name,email, phone_number,password=None):
        if not email:
            raise ValueError('User Must Have An Email Adress')
        if not phone_number:
            raise ValueError('User Must Have An Phone Number')
            
        user = self.model(
            email = self.normalize_email(email),
            first_name = first_name,
            phone_number = phone_number
        )
        user.set_password(password)
        user.save(using=self._db)
        
        return user
    
    def create_superuser(self,first_name,email, phone_number,password):
        user = self.create_user(email=self.normalize_email(email),first_name=first_name,phone_number=phone_number,password=password,)
        user.is_active = True
        user.is_superuser = True
        user.is_email_verified = True
        user.is_staff = True
        
        user.save(using=self._db)
        return user
            

class User(AbstractBaseUser):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50,blank=True)
    phone_number = models.CharField(max_length=12,unique=True)
    email = models.EmailField(max_length=100,unique=True)
    
    
    
    #required field
    date_joined = models.DateTimeField(auto_now_add=True)
    last_login = models.DateTimeField(auto_now_add=True)
    is_superuser = models.BooleanField(default=False)
    is_email_verified = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    
    USERNAME_FIELD  = 'email'
    REQUIRED_FIELDS = ['phone_number','first_name']
    
    objects = MyAccountManager()
    
    def __str__(self):
        return self.first_name
    
    def has_perm(self,perm,obj=None):
        return self.is_superuser
    
    def has_module_perms(self,add_label):
        return True
        

class UserProfile(models.Model):
    user=models.OneToOneField(User,on_delete=models.CASCADE,related_name="User_Profile")
    profile_pic = models.ImageField(upload_to='user/profile_pic/',null=True,blank=True)
    
    def __str__(self):
        return str(self.user.first_name)
    