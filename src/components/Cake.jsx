import React, { useEffect } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import { useCustomization } from "../contexts/Customization.jsx";
import {
    Color,
    LinearEncoding,
    sRGBEncoding,
    MirroredRepeatWrapping,
    RepeatWrapping,
    LinearMipmapLinearFilter,
    LinearFilter
} from "three";
import { useThree } from '@react-three/fiber';
import * as THREE from "three";

export function Cake(props) {
    const { nodes, materials } = useGLTF('/models/cake.gltf');
    const plate = useGLTF('/models/scene.gltf');
    const { material, form, cakeColor, creamColor, nuts, chocolate, balls, candle } = useCustomization();
    const stand_color = new Color('#2a2424');

    ['Mesh004', 'Mesh004_1', 'Mesh004_2', 'Mesh004_3'].forEach((meshName) => {
        if (nodes[meshName]?.material) {
            nodes[meshName].material.color = stand_color;
        }
    });

    const { gl } = useThree(); // Получаем доступ к рендереру

    const candyTextureProps = useTexture({
        map: "/textures/candy/Candy_basecolor.jpg",
        normalMap: "/textures/candy/Candy_normal.jpg",
        roughnessMap: "/textures/candy/Candy_roughness.jpg",
        aoMap: "/textures/candy/Candy_ambientOcclusion.jpg",
    });
    const stylizedFurTextureProps = useTexture({
        map: "/textures/stylized_fur/Stylized_Fur_002_basecolor.jpg",
        normalMap: "/textures/stylized_fur/Stylized_Fur_002_normal.jpg",
        roughnessMap: "/textures/stylized_fur/Stylized_Fur_002_roughness.jpg",
        aoMap: "/textures/stylized_fur/Stylized_Fur_002_ambientOcclusion.jpg",
    });
    const surfaceTextureProps = useTexture({
        map: "/textures/surface/Surface_Imperfection_001_basecolor.jpg",
        normalMap: "/textures/surface/Surface_Imperfection_001_normal.jpg",
        roughnessMap: "/textures/surface/Surface_Imperfection_001_roughness.jpg",
        aoMap: "/textures/surface/Surface_Imperfection_001_ambientOcclusion.jpg",
    });
    const abstractTextureProps = useTexture({
        map: "/textures/abstract/Abstract_Organic_007_basecolor.jpg",
        normalMap: "/textures/abstract/Abstract_Organic_006_normal.jpg",
        roughnessMap: "/textures/abstract/Abstract_Organic_006_roughness.jpg",
        aoMap: "/textures/abstract/Abstract_Organic_006_ambientOcclusion.jpg",
    });
    const barkPineTextureProps = useTexture({
        map: "/textures/bark_pine/Bark_Pine_003_BaseColor.jpg",
        normalMap: "/textures/bark_pine/Bark_Pine_003_Normal.jpg",
        roughnessMap: "/textures/bark_pine/Bark_Pine_003_Roughness.jpg",
        aoMap: "/textures/bark_pine/Bark_Pine_003_AmbientOcclusion.jpg",
    });
    const lavaTextureProps = useTexture({
        map: "/textures/lava/Lava_006_basecolor.jpg",
        normalMap: "/textures/lava/Lava_006_normal.jpg",
        roughnessMap: "/textures/lava/Lava_006_roughness.jpg",
        aoMap: "/textures/lava/Lava_006_ambientOcclusion.jpg",
    });
    const woodTextureProps = useTexture({
        map: "/textures/wood/Wood_023_basecolor.jpg",
        normalMap: "/textures/wood/Wood_023_normal.jpg",
        roughnessMap: "/textures/wood/Wood_023_roughness.jpg",
        aoMap: "/textures/wood/Wood_023_ambientOcclusion.jpg",
    });
    const coffeeTextureProps = useTexture({
        map: "/textures/coffee/Coffee_Grains_001_BaseColor.jpg",
        normalMap: "/textures/coffee/Coffee_Grains_001_Normal.jpg",
        roughnessMap: "/textures/coffee/Coffee_Grains_001_Roughness.jpg",
        aoMap: "/textures/coffee/Coffee_Grains_001_AmbientOcclusion.jpg",
    });
    const absTwoTextureProps = useTexture({
        map: "/textures/abstract2/Abstract_001_COLOR.jpg",
        normalMap: "/textures/abstract2/Abstract_001_NRM.jpg",
        roughnessMap: "/textures/abstract2/Abstract_001_DISP.png",
        aoMap: "/textures/abstract2/Abstract_001_OCC.jpg",
    });
    const milkshakeTextureProps = useTexture({
        map: "/textures/milkshake/Strawberry_milkshake_foam_001_COLOR.jpg",
        normalMap: "/textures/milkshake/Strawberry_milkshake_foam_001_NORM.jpg",
        roughnessMap: "/textures/milkshake/Strawberry_milkshake_foam_001_ROUGH.jpg",
        aoMap: "/textures/milkshake/Strawberry_milkshake_foam_001_OCC.jpg",
    });

    // Сбор всех текстур в объект для удобства
    const textures = {
        'abstract': abstractTextureProps,
        'abstractT': absTwoTextureProps,
        'surface': surfaceTextureProps,
        'wood': woodTextureProps,
        'bark_pine': barkPineTextureProps,
        'candy': candyTextureProps,
        'coffee':coffeeTextureProps,
        'stylized_fur': stylizedFurTextureProps,
        'lava': lavaTextureProps,
        'milkshake': milkshakeTextureProps
    };

    useEffect(() => {
        const maxAnisotropy = gl.capabilities.getMaxAnisotropy();

        Object.values(textures).forEach((textureGroup) => {
            Object.keys(textureGroup).forEach((key) => {
                const texture = textureGroup[key];
                if (texture) {
                    if (key === 'map') {
                        texture.encoding = sRGBEncoding;
                    } else {
                        texture.encoding = LinearEncoding;
                    }

                    texture.anisotropy = maxAnisotropy;

                    texture.minFilter = LinearMipmapLinearFilter;
                    texture.magFilter = LinearFilter;
                    texture.generateMipmaps = true;
                }
            });
        });
    }, [textures, gl]);

    useEffect(() => {
        if (nodes.cream && nodes.cream.material) {
            nodes.cream.material.color = new Color(creamColor.color);
        }
    }, [creamColor, nodes]);

    return (
        <group {...props} dispose={null}>
            {/* Торт */}
            <group rotation={[Math.PI / 2, 0, 0]} scale={0.07}>
                <group position={[0, 0, -27.2]} scale={1.01}>
                    <mesh geometry={nodes.Mesh004.geometry} material={materials['Strip Part']} castShadow/>
                    <mesh geometry={nodes.Mesh004_1.geometry} material={materials['Primary Part']} castShadow/>
                    <mesh geometry={nodes.Mesh004_2.geometry} material={materials['Add Part M']} castShadow/>
                    <mesh geometry={nodes.Mesh004_3.geometry} material={materials.plastic1} castShadow/>
                </group>
            </group>
            <mesh
                geometry={nodes.Cake.geometry}
                position={[0, 1.89, 0]}
                scale={[0.95, 0.92, 0.95]}
                visible={form === 1}
                castShadow
            >
                <meshStandardMaterial
                    {...textures[material]}
                    color={cakeColor.color}
                />
            </mesh>
            <mesh
                geometry={nodes.cakeHeart.geometry}
                material={materials.Cake}
                position={[0, 1.41, 0]}
                rotation={[1.57, 0, 0]}
                scale={0.1}
                visible={form === 2}
                castShadow
            >
                <meshStandardMaterial
                    {...textures[material]}
                    color={cakeColor.color}
                />
            </mesh>

            <group
                position={[0, -0.5, 0]}
                scale={[1.5, 1.5, 1.5]}
                rotation={[Math.PI / 2, 0, 0]}
            >
                <primitive object={plate.scene}/>
            </group>

            <mesh
                geometry={nodes.cream.geometry}
                material={materials.Cream}
                position={[0, 1.41, 0]}
                rotation={[1.57, 0, 0]}
                scale={0.1}
                visible={form === 2}
                castShadow
            />
            <mesh geometry={nodes.chandel.geometry} material={materials.chandel} position={[0, 2.33, 0]}
                  rotation={[-Math.PI / 2, 0, 0]} scale={-0.03} visible={candle}/>
            <group position={[0.08, 2.31, 0.42]} rotation={[Math.PI / 2, 0, -2.81]} scale={0.18} visible={nuts}>
                <mesh geometry={nodes.Mesh021.geometry} material={materials.Default}/>
                <mesh geometry={nodes.Mesh021_1.geometry} material={materials.Default}/>
            </group>
            <mesh geometry={nodes.bar.geometry} material={materials.choco} position={[0, 2.5, 0]}
                  rotation={[2.87, -0.55, -2.38]} scale={0.1} visible={chocolate}/>
            <mesh geometry={nodes.balls.geometry} material={materials.balls} position={[0.27, 2.44, -0.05]}
                  rotation={[-2.24, 0.35, -0.42]} scale={-0.06} visible={balls}/>

        </group>
    );
}

useGLTF.preload('/models/scene.gltf');
useGLTF.preload('/models/cake.gltf');
