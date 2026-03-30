export const publicBlobVariants = ['default', 'halo'] as const
export const blobRenderPasses = ['default', 'halo', 'particle'] as const

export type BlobVariant = (typeof publicBlobVariants)[number]
export type BlobRenderPass = (typeof blobRenderPasses)[number]

export const blobVariantPasses: Record<BlobVariant, BlobRenderPass[]> = {
  default: ['default'],
  halo: ['halo', 'particle'],
}
