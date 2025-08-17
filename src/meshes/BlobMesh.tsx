import { useEffect, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { PositionalAudio } from '@react-three/drei'
import * as THREE from 'three'
import { BlobMeshProps, BlobMeshRef } from './types'

function BlobMesh({ audioUrl, shaderType = 'default' }: BlobMeshProps) {
  const sound = useRef<any>(null)
  const analyzer = useRef<THREE.AudioAnalyser>()
  const [isPlaying, setIsPlaying] = useState(true)
  const meshRef = useRef<BlobMeshRef>(null!)

  useEffect(() => {
    if (sound.current) {
      analyzer.current = new THREE.AudioAnalyser(sound.current, 32)
    }
  }, [sound])

  useFrame(({ clock, camera }) => {
    if (!meshRef.current?.material) return

    const material = meshRef.current.material as THREE.ShaderMaterial
    material.uniforms.uTime.value = clock.getElapsedTime()
    
    // Update camera position for rim effect
    if (material.uniforms.ucameraPosition) {
      material.uniforms.ucameraPosition.value = camera.position.toArray()
    }
    
    if (analyzer.current) {
      const avgFreq = analyzer.current.getAverageFrequency()
      material.uniforms.uFreq.value = avgFreq / 256
    }
  })

  function handleMeshClick() {
    if (!sound.current) return

    if (isPlaying) {
      sound.current.pause()
    } else {
      sound.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <mesh
      onClick={handleMeshClick}
      castShadow
      ref={meshRef}
      scale={[1, 1, 1]}
      rotation={[Math.PI / 2, 0, 0]}
    >
      <PositionalAudio 
        url={audioUrl} 
        distance={7} 
        loop 
        ref={sound} 
        autoplay={true} 
      />
      <icosahedronGeometry args={[4, 100]} />
      {shaderType === 'halo' ? (
        <haloBlobShaderMaterial transparent={true} />
      ) : (
        <blobShaderMaterial transparent={true} />
      )}
    </mesh>
  )
}

export { BlobMesh }
