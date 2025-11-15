import { useState } from 'react'
import { BaseModal } from '@src/shared/ui/base-modal/BaseModal'
import { Input } from '@src/shared/ui/shadcn/input'
import { Button } from '@src/shared/ui/shadcn/button'
import { useLinkTelegram } from '@src/entities/User/api/hooks/useLinkTelegram'

interface TelegramIdModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export const TelegramIdModal = ({ open, onOpenChange }: TelegramIdModalProps) => {
  const [value, setValue] = useState('')
  const linkTelegram = useLinkTelegram()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!value.trim()) return

    linkTelegram.mutate(
      { telegramUserId: value.trim() },
      {
        onSuccess: () => {
          onOpenChange(false)
        },
      },
    )
  }

  return (
    <BaseModal
      open={open}
      onOpenChange={onOpenChange}
      title="Link your Telegram"
      description="Enter your Telegram user ID so we can verify Telegram-based tasks."
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2 text-left">
          <label className="text-sm text-slate-300">
            Telegram User ID
          </label>
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="e.g. 123456789"
            className="bg-black/30 border-white/20 text-white"
          />
        </div>

        {linkTelegram.isError && (
          <p className="text-sm text-red-400">
            Failed to link Telegram. Please try again.
          </p>
        )}

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-cyan-500"
          disabled={!value.trim() || linkTelegram.isPending}
        >
          {linkTelegram.isPending ? 'Linking...' : 'Link Telegram'}
        </Button>
      </form>
    </BaseModal>
  )
}
