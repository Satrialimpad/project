'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { User, LogIn, UserPlus, Package, Heart, Settings, LogOut } from 'lucide-react'
import { useState } from 'react'

export function NavbarAuthActions() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showAuthDialog, setShowAuthDialog] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login')

  const handleLogin = () => {
    setIsLoggedIn(true)
    setShowAuthDialog(false)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          {isLoggedIn ? (
            <>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Package className="mr-2 h-4 w-4" />
                Orders
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Heart className="mr-2 h-4 w-4" />
                Wishlist
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </>
          ) : (
            <>
              <DropdownMenuItem onClick={() => {
                setAuthMode('login')
                setShowAuthDialog(true)
              }}>
                <LogIn className="mr-2 h-4 w-4" />
                Login
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => {
                setAuthMode('register')
                setShowAuthDialog(true)
              }}>
                <UserPlus className="mr-2 h-4 w-4" />
                Register
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={showAuthDialog} onOpenChange={setShowAuthDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {authMode === 'login' ? 'Login' : 'Create Account'}
            </DialogTitle>
            <DialogDescription>
              {authMode === 'login' 
                ? 'Login to access your account' 
                : 'Create a new account to get started'}
            </DialogDescription>
          </DialogHeader>
          
          {/* Login/Register Form */}
          <div className="space-y-4 py-4">
            {authMode === 'login' ? (
              <div className="space-y-4">
                <Button 
                  onClick={handleLogin} 
                  className="w-full"
                >
                  Login
                </Button>
                <p className="text-center text-sm">
                  Don&apos;t have an account?
                  <button 
                    onClick={() => setAuthMode('register')}
                    className="text-blue-500 hover:underline"
                  >
                    Register
                  </button>
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <Button 
                  onClick={handleLogin}
                  className="w-full"
                >
                  Create Account
                </Button>
                <p className="text-center text-sm">
                  Already have an account?{' '}
                  <button
                    onClick={() => setAuthMode('login')}
                    className="text-blue-500 hover:underline"
                  >
                    Login
                  </button>
                </p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}